import firebase from '@/firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { collection, addDoc } from 'firebase/firestore'

export const firestore = getFirestore(firebase)

export const addContactFormData = async (formData) => {
  try {
    const docRef = await addDoc(collection(firestore, 'contactForms'), formData)
    return docRef.id
  } catch (error) {
    throw error
  }
}

export const updateUserDocs = async (userId, updatedObj) => {
  const docRef = doc(firestore, 'users', userId);
  await setDoc(docRef, updatedObj, { merge: true });
};




export const updateCustomerData = async (userId, updatedObj) => {
  const docRef = doc(firestore, 'users', userId)
  await setDoc(docRef, updatedObj, { merge: true })
}

export const getCurrentUserData = async (userId) => {
  const docRef = doc(firestore, 'users', userId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  }
  return null
}
