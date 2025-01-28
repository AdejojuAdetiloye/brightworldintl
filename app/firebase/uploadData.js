
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "./firebaseConfig";

// Function to upload book and its files
async function uploadBookData(title, category, description,placesToGetBook, thumbnail, audio, video) {
  try {
    // 1. Upload thumbnail to Firebase Storage
    const thumbnailRef = ref(storage, "thumbnails/" + thumbnail.name);
    const thumbnailUploadTask = uploadBytesResumable(thumbnailRef, thumbnail);
    
    // 2. Upload audio to Firebase Storage
    const audioRef = ref(storage, "audios/" + audio.name);
    const audioUploadTask = uploadBytesResumable(audioRef, audio);
    
    // 3. Upload video to Firebase Storage
    const videoRef = ref(storage, "videos/" + video.name);
    const videoUploadTask = uploadBytesResumable(videoRef, video);

    // Wait for all uploads to complete
    await Promise.all([
      thumbnailUploadTask,
      audioUploadTask,
      videoUploadTask,
    ]);

    // Get download URLs for each file after upload is complete
    const thumbnailURL = await getDownloadURL(thumbnailRef);
    const audioURL = await getDownloadURL(audioRef);
    const videoURL = await getDownloadURL(videoRef);

    // 4. Create a new document in Firestore for the book
    const newBookDoc = doc(db, "books", title);  // you can use any unique identifier for the document
    await setDoc(newBookDoc, {
      title,
      category,
      placesToGetBook,
      description,
      thumbnailURL,  // Store the URL of the uploaded thumbnail
      audioURL,      // Store the URL of the uploaded audio
      videoURL,      // Store the URL of the uploaded video
      createdAt: new Date(),
    });

    alert("Book uploaded successfully!");
    return newBookDoc;

  } catch (error) {
    alert("Error uploading book data: ", error.message);
  }
}

export default uploadBookData;