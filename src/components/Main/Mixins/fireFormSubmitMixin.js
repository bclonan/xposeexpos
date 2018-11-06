import {
  uuid
} from 'vue-uuid';
const fb = require('@/services/firebase/init.js');

//Upload Asset
export const uploadAsset = {
  data() {
    return {

      feedback: null,

      uploadProgress: null,
      new_category_name: null,
      new_category_description: null
    };
  },
  methods: {
    onFileSelected(event) {
      //console.log(event);
      this.selectedFile = event.target.files[0]

    },
    uploadNewFile() {
      let uploadedFileToast = this.$toasted.show("Successfully Uploaded", {
        theme: "primary",
        type: 'success',
        className: "successToast",
        position: "bottom-right",
        duration: 4000
      });
      if (this.selectedFile) {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        //random file id
        const fileRanId = uuid.v4();
        const aRef = fb.fbstorageRef;
        const bRef = aRef.ref();
        // fileinfo
        var f = this.selectedFile;

        const fileName = f.name;
        const fileType = f.type;
        const fileSize = f.size;

        const meta = {
          contentType: fileType,
          size: fileSize,
          name: fileName,
        };
        const fileOwner = this.currentUser.Name;
        const fileOwnerID = this.currentUser.user_id;
        //Target Refs
        const userFilePath = fb.usersCollection.doc(fileOwnerID).collection('files').doc();
        const fileCollectionPath = fb.userFileCollection.doc(fileRanId);

        //Extra data
        const current_version_id = uuid.v4();

        //File Version
        //const fileVersionId = fileCollectionPath.collection('versions').doc(current_version_id);
        //File Version Comments
        //const currentVersionComments = fileVersionId.collection('comments');
        //File Version Edits
        //const currentVersionEdits = fileVersionId.collection('revisions');
        let currentTime = Date.now();

        const uploadTask = bRef.child(`user_assets/${fileRanId}`).put(f, meta);
        uploadTask.on(
          fb.fbStorage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            this.uploadProgress = progress;
            switch (snapshot.state) {
              case fb.fbStorage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case fb.fbStorage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            switch (error.code) {
              case 'storage/unauthorized':

                break;

              case 'storage/canceled':

                break;

              case 'storage/unknown':

                break;
            }
          },
          () => {
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then((downloadURL) => {

                const batch = fb.db.batch();

                batch.set(userFilePath, {
                  fileId: fileRanId,
                  file_permissions: {
                    owner: true,
                    read: true,
                    write: true,
                    share: true,
                  },
                  file_ref: fileCollectionPath,
                  assetName: fileName,
                  assetType: fileType,
                  assetDate: currentTime,

                });

                batch.set(fileCollectionPath, {
                  assetName: fileName,
                  assetType: fileType,
                  assetDescription: 'add a description',
                  assetDate: currentTime,
                  assetVersion: current_version_id,
                  assetSrc: downloadURL,
                  fileOwner: fileOwner,
                  lastModified: currentTime,
                  assetSize: fileSize,
                  lastModifiedBy: fileOwner,
                  assetIcon: '',
                  assetTags: [{
                    assettagClass: 'is-secondary',
                    assettagTag: '',
                  }, ],
                  assetGroups: [{
                    assetgrouptagClass: 'is-secondary',
                    assetgroupTag: '',
                  }, ],
                });

                return batch
                  .commit()
                  .then(() => {
                    uploadedFileToast;
                    this.uploadProgress = null;
                    this.$store.commit("toggleActiveModal/toggleModalOverlay", null);
                  })
                  .catch((err) => {
                    this.feedback = 'There was a problem uploading your file please try again.';
                  });

                // /add to store folder
              });
          },
        );
      } else {
        this.feedback = 'You have to select a file first';
        return;
      }
    },
    addExpoCategory() {

      let CreatedCategoryToast = this.$toasted.show("Successfully Created", {
        theme: "primary",
        type: 'success',
        className: "successToast",
        position: "bottom-right",
        duration: 4000
      });

      if (this.new_category_description && this.new_category_name) {
        const xID = this.$route.params.id;
        const categoryList = fb.expoCollection.doc(xID).collection("categories").doc();
        const category_id = uuid.v4();
        var categorydata = {
          category_id: category_id,
          category_name: this.new_category_name,
          category_description: this.new_category_description
        };


        categoryList.set(categorydata).then(() => {
            CreatedCategoryToast;
            this.new_category_name = null;
            this.new_category_description = null;
            this.$store.commit("toggleActiveModal/toggleModalOverlay", null);
          })
          .catch((err) => {
            this.feedback = 'There was a problem creating the category please try again.';
          });

        // /add to store folder



      } else {
        this.feedback = 'You have to fill in all fields';
        return;
      }
    },

    resetActiveModalOverlay() {
      this.selectedFile = null;
      this.$store.commit("toggleActiveModal/toggleModalOverlay", null);

      return;
    }
  },
  computed: {
    //User Info
    currentUser() {
      return this.$store.state.userProfile;
    },

  }
};


export const createCategory = {
  data() {
    return {

      feedback: null,

      new_category_name: null,
      new_category_description: null
    };
  },
  methods: {
    addExpoCategory() {

      let CreatedCategoryToast = this.$toasted.show("Successfully Created", {
        theme: "primary",
        type: 'success',
        className: "successToast",
        position: "bottom-right",
        duration: 4000
      });

      if (this.new_category_description && this.new_category_name) {
        const xID = this.$route.params.id;
        const categoryList = fb.expoCollection.doc(xID).collection("categories").doc();
        const category_id = uuid.v4();
        var categorydata = {
          category_id: category_id,
          category_name: this.new_category_name,
          category_description: this.new_category_description
        };


        categoryList.set(categorydata).then(() => {
            CreatedCategoryToast;

            this.$store.commit("toggleActiveModal/toggleModalOverlay", null);
          })
          .catch((err) => {
            this.feedback = 'There was a problem creating the category please try again.';
          });

        // /add to store folder



      } else {
        this.feedback = 'You have to fill in all fields';
        return;
      }
    },

    resetActiveModalOverlay() {
      this.new_category_name = null;
      this.new_category_description = null;
      this.$store.commit("toggleActiveModal/toggleModalOverlay", null);

      return;
    }
  },
  computed: {
    //User Info
    currentUser() {
      return this.$store.state.userProfile;
    },

  }
};
