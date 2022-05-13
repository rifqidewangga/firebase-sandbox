import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCFj_yCbyBfk8m1cn6P77HigS3Sen-fxUM",
  authDomain: "fir-9-dojo-45060.firebaseapp.com",
  projectId: "fir-9-dojo-45060",
  storageBucket: "fir-9-dojo-45060.appspot.com",
  messagingSenderId: "449321419064",
  appId: "1:449321419064:web:f3f0234c50d29959af41cd"
};

// init firevase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id })
    })

    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })
