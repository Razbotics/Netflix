import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getCollection = async () => {
      try {
        const snapshot = await firebase.firestore().collection(target).get();
        const allContent = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        setContent(allContent);
      } catch (error) {
        console.log(error);
      }
    };
    getCollection();
  }, [firebase, target]);

  return { [target]: content };
}

export default useContent;
