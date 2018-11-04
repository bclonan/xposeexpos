const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({
  origin: true
});
const Busboy = require('busboy');
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;
const fs = require('fs');
const express = require('express');

const chatApp = express();
admin.initializeApp();

// added
const gcconfig = {
  projectId: 'xposeexpos',
  keyFilename: 'service-account-credentials.json',
};

const gcs = require('@google-cloud/storage')(gcconfig);
//

exports.checkAlias = functions.https.onCall((data, context) => {
  const ref = admin.firestore().collection('users').doc(data.slug);
  return ref.get().then(doc => ({
    unique: !doc.exists
  })).catch((err) => {
    throw new functions.https.HttpsError('failed to connect');
  });
});

exports.checkCollab = functions.https.onCall((data, context) => {
  const ref = admin.firestore().collection('collabs').doc(data.slug);
  return ref.get().then(doc => ({
    unique: !doc.exists
  })).catch((err) => {
    throw new functions.https.HttpsError('failed to connect');
  });
});


exports.checkChatbot = functions.https.onCall((data, context) => {
  const ref = admin.firestore().collection('chatBots').doc(data.slug);
  return ref.get().then(doc => ({
    unique: !doc.exists
  })).catch((err) => {
    throw new functions.https.HttpsError('failed to connect');
  });
});

exports.checkadFunc = functions.https.onCall((data, context) => {
  const ref = admin.firestore().collection('userAds').doc(data.slug);
  return ref.get().then(doc => ({
    unique: !doc.exists
  })).catch((err) => {
    throw new functions.https.HttpsError('failed to connect');
  });
});

exports.checkStoryform = functions.https.onCall((data, context) => {
  const ref = admin.firestore().collection('storyForms').doc(data.slug);
  return ref.get().then(doc => ({
    unique: !doc.exists
  })).catch((err) => {
    throw new functions.https.HttpsError('failed to connect');
  });
});

exports.checkfunnelFunc = functions.https.onCall((data, context) => {
  const ref = admin.firestore().collection('userFunnels').doc(data.slug);
  return ref.get().then(doc => ({
    unique: !doc.exists
  })).catch((err) => {
    throw new functions.https.HttpsError('failed to connect');
  });
});

exports.onFileChange = functions.storage.object().onMetadataUpdate((event) => {
  const object = event.data;
  const bucket = object.bucket;
  const contentType = object.contentType;
  const filePath = object.name;
  console.log('File change detected, function execution started');

  if (object.resourceState === 'not_exists') {
    console.log('We deleted a file, exit...');
    return;
  }

  if (path.basename(filePath).startsWith('resized-')) {
    console.log('We already renamed that file!');
    return;
  }

  const destBucket = gcs.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = {
    contentType
  };
  return destBucket
    .file(filePath)
    .download({
      destination: tmpFilePath,
    })
    .then(() => spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath]))
    .then(() => destBucket.upload(tmpFilePath, {
      destination: `resized-${path.basename(filePath)}`,
      metadata,
    }));
});

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(500).json({
        message: 'Not allowed',
      });
    }
    const busboy = new Busboy({
      headers: req.headers
    });
    let uploadData = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = {
        file: filepath,
        type: mimetype
      };
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on('finish', () => {
      const bucket = gcs.bucket('xyzfunnel.appspot.com');
      bucket
        .upload(uploadData.file, {
          uploadType: 'media',
          metadata: {
            metadata: {
              contentType: uploadData.type,
            },
          },
        })
        .then((ref) => {
          res.status(200).json({
            datastuff: ref,
            message: 'It worked!',
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    });
    busboy.end(req.rawBody);
  });
});


exports.fun = functions.https.onRequest((req, res) => {
  const store = admin.firestore();
  store.collection('users').doc('foo').get().then((doc) => {
      if (doc.exists) {
        console.log(doc.data());
        res.send(doc.data());
      } else {
        res.send('Nothing');
      }
    })
    .catch((reason) => {
      console.log(reason);
      res.send(reason);
    });
});
