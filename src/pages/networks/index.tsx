import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { FormEvent, useEffect, useState } from "react";
import { db } from "../../services/firebaseconnection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from 'react-toastify';

export function Networks() {

    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [youtube, setYoutube] = useState('')


    useEffect(() => {
        function loadingLinks() {
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setFacebook(snapshot.data()?.facebook)
                        setInstagram(snapshot.data()?.instagram)
                        setYoutube(snapshot.data()?.youtube)
                    }
                })
        }

        loadingLinks()

    }, [])


    function handleRegister(e: FormEvent) {
        e.preventDefault();

        try {
            setDoc(doc(db, "social", "link"), {
                facebook: facebook,
                instagram: instagram,
                youtube: youtube
            })

            toast.success("Todos os links foram salvos")


        } catch (error) {
            console.log(`Erro ${error}`)
            toast.error("O link não foi salvo com sucesso")
        }

    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
                <label className="text-white font-medium mt-2 mb-2">Link do facebook</label>
                <Input placeholder="Digite a url do facebook..."
                    type="url"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)} />

                <label className="text-white font-medium mt-2 mb-2">Link do instagram</label>
                <Input placeholder="Digite a url do Instagram..."
                    type="url"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)} />

                <label className="text-white font-medium mt-2 mb-2">Link do youtube</label>
                <Input placeholder="Digite a url do Youtube..."
                    type="url"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)} />

                <button type="submit" className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium">Salvar links</button>
            </form>
        </div>
    )
}