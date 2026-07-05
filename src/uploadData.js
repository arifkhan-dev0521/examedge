import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { subjectsData } from './data/subjectsData';

export async function uploadAllSubjects() {
  try {
    const subjectIds = Object.keys(subjectsData);
    
    for (const subjectId of subjectIds) {
      const subjectData = subjectsData[subjectId];
      await setDoc(doc(db, 'subjects', subjectId), subjectData);
      console.log(`✅ Uploaded: ${subjectId}`);
    }
    
    console.log('🎉 All subjects uploaded successfully!');
    return { success: true, count: subjectIds.length };
  } catch (error) {
    console.error('❌ Upload failed:', error);
    return { success: false, error: error.message };
  }
}