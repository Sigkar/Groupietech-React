import firebase from 'firebase/app';

function refStoragePrep(){
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let images = storageRef.child("/images");

    let profPictures = images.child("/profile_pictures");
    
    let img = profPictures.child("/DuncanComp.jpg");
    console.log(img.fullPath);
    console.log(img);
}

export {refStoragePrep}