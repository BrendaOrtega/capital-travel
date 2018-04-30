import firebase from '../firebase';

export function getProductById(id){
    return firebase.database().ref("eventos").child(id)
        .once("value")
        .then(snap=>{
            const evento = snap.val();
            return evento;

        });
}

export function updateProductById(id, evento){
    return firebase.database().ref("eventos").child(id)
        .set(evento)
        .then(()=>{
            return;
        });
}