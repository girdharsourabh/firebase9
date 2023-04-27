import { initializeApp } from 'firebase/app'
import {
    collection,
    getDocs,
    getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCb5sPhrwGV6prL5X_ldZnWb3fh5tN9ldg",
    authDomain: "fir-9-demo-ee0aa.firebaseapp.com",
    projectId: "fir-9-demo-ee0aa",
    storageBucket: "fir-9-demo-ee0aa.appspot.com",
    messagingSenderId: "1043436389561",
    appId: "1:1043436389561:web:af2076561c8a3351a5c768"
  }


//initialize  
initializeApp(firebaseConfig)

//init service

const db = getFirestore()

//collection ref
const colRef = collection(db, 'books')

//get data
getDocs(colRef)
  .then((snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => 
        books.push({ ...doc.data(), id: doc.id })
        
  )
  console.log(books)
  }
  )
  .catch(err => {
    console.log(err)
  })
