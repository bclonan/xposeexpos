import {
  uuid
} from 'vue-uuid';
const fb = require('@/services/firebase/init.js');

export const getAllAssets = {
    data() {
        return {
             userAssets: [],
             usersFolders: [],
             feedback: null,
             shareFolderName: null,
             selectedFolder: null,
             selectedFolder_id: null,
        }
    },
    computed: {

    },
    created() {
      const self = this;
        const currentUserid = this.$store.state.currentUser.uid;
        const userFolders = fb.usersCollection
      .doc(currentUserid)
      .collection('userAssets');
      userFolders.onSnapshot((snapshot) => {
      const folders = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const folderPermissions = change.doc.data().folder_permissions;
          var folderid = change.doc.data().folder_id;
          const docRefs = change.doc.data().folder_ref;

          docRefs.get().then((doc) => {
            const thirdnew = doc.data();
            // push other results from first query to returned object using dot or square bracket notation obj.key3 = "value3"; obj["key3"] = "value3";
            thirdnew.id = doc.id;
            thirdnew.folderId = folderid;
            thirdnew.add_file_p = folderPermissions.addFiles;
            thirdnew.delete_file_p = folderPermissions.deleteFiles;
            thirdnew.delete_folder_p = folderPermissions.deleteFolder;
            thirdnew.invite_p = folderPermissions.inviteMembers;
            thirdnew.modify_file_p = folderPermissions.modifyFiles;
            thirdnew.modify_folder_p = folderPermissions.modifyFolder;
            thirdnew.owner = folderPermissions.owner;
            thirdnew.remove_member_p = folderPermissions.removeMembers;
            thirdnew.sell_files_p = folderPermissions.sellFiles;
            // thirdnew.id = doc.id
            folders.push(thirdnew);
          });
        }
        if (change.type === 'modified') {
          const folderPermissions = change.doc.data().folder_permissions;
          var folderid = change.doc.data().folder_id;
          const docRefs = change.doc.data().folder_ref;

          docRefs.get().then((doc) => {
            const thirdnew = doc.data();
            // push other results from first query to returned object using dot or square bracket notation obj.key3 = "value3"; obj["key3"] = "value3";
            thirdnew.folderId = folderid;
            thirdnew.add_file_p = folderPermissions.addFiles;
            thirdnew.delete_file_p = folderPermissions.deleteFiles;
            thirdnew.delete_folder_p = folderPermissions.deleteFolder;
            thirdnew.invite_p = folderPermissions.inviteMembers;
            thirdnew.modify_file_p = folderPermissions.modifyFiles;
            thirdnew.modify_folder_p = folderPermissions.modifyFolder;
            thirdnew.owner = folderPermissions.owner;
            thirdnew.remove_member_p = folderPermissions.removeMembers;
            thirdnew.sell_files_p = folderPermissions.sellFiles;
            // thirdnew.id = doc.id
            folders.push(thirdnew);
          });
        }
        if (change.type === 'removed') {
          const folderPermissions = change.doc.data().folder_permissions;
          var folderid = change.doc.data().folder_id;
          const docRefs = change.doc.data().folder_ref;

          docRefs.get().then((doc) => {
            const thirdnew = doc.data();
            // push other results from first query to returned object using dot or square bracket notation obj.key3 = "value3"; obj["key3"] = "value3";
            thirdnew.folderId = folderid;
            thirdnew.add_file_p = folderPermissions.addFiles;
            thirdnew.delete_file_p = folderPermissions.deleteFiles;
            thirdnew.delete_folder_p = folderPermissions.deleteFolder;
            thirdnew.invite_p = folderPermissions.inviteMembers;
            thirdnew.modify_file_p = folderPermissions.modifyFiles;
            thirdnew.modify_folder_p = folderPermissions.modifyFolder;
            thirdnew.owner = folderPermissions.owner;
            thirdnew.remove_member_p = folderPermissions.removeMembers;
            thirdnew.sell_files_p = folderPermissions.sellFiles;
            // thirdnew.id = doc.id
            folders.push(thirdnew);
          });
        }
      });
      // console.log(folders)
      self.usersFolders = folders;
    });
    }
};
