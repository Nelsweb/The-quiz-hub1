
import { db, ref, push } from '../firebase/firebase.js';

function saveScoreToFirebase(matric, score, subject) {
  const quizRef = ref(db, 'quiz_scores/');
  push(quizRef, {
    matric,
    score,
    subject,
    timestamp: new Date().toISOString()
  });
}
