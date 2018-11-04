import * as axios from 'axios';

const url = 'https://xyzleads.com/xyzimguploads/funnelfileupload.php';

function upload(formData) {
  return (
    axios
      .post(url, formData)
      // get data

      .then((x) => {
        console.log(x.data);
      })
  );
}

export { upload };
