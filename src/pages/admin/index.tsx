import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { FormEvent, useState, useEffect } from 'react'
import { FiTrash } from 'react-icons/fi'
import {
    addDoc, collection, onSnapshot, query, orderBy,
    doc, deleteDoc
} from 'firebase/firestore'
import { db } from '../../services/firebaseconnection'
import { toast } from 'react-toastify'

interface LinksProps {
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
}

export function Admin() {

    const [nameInput, setNameInput] = useState('')
    const [urlInput, setUrlInput] = useState('')
    const [textColorInput, setTextColorInput] = useState("#f1f1f1")
    const [backgroundColorInput, setBackgroundColorInput] = useState("#121212")
    const [links, setLinks] = useState<LinksProps[]>([])



    useEffect(() => {
        const linksRef = collection(db, "links")
        const queryRef = query(linksRef, orderBy("created", "asc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            const lista = [] as LinksProps[];

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().nome,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color
                })
            })

            setLinks(lista)

        })


        return () => {
            unsub();
        }

    }, [])



    async function handleRegister(e: FormEvent) {
        e.preventDefault();

        try {
            await addDoc(collection(db, "links"), {
                nome: nameInput,
                url: urlInput,
                bg: backgroundColorInput,
                color: textColorInput,
                created: new Date(),
            })

            toast.success("Cadastrado com sucesso!")
            setNameInput('');
            setUrlInput('');

        } catch (error) {
            console.log(`Erro ao cadastrar no banco de dados: ${error}`)
        }

    }

    async function handleDeleteLink(id: string) {
        const docRef = doc(db, "links", id)
        await deleteDoc(docRef)

        toast.error("Excluido")
    }


    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <form onSubmit={handleRegister} className='flex flex-col mt-8 mb-3 w-full max-w-xl'>
                <label className='text-white font-medium mt-2 mb-2'>Nome do Link</label>
                <Input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder='Digite o nome do link...'
                />

                <label className='text-white font-medium mt-2 mb-2'>Url do Link</label>
                <Input
                    type='url'
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder='Digite a url...'
                />

                <section className='flex my-4 gap-5'>
                    <div className='flex gap-2'>
                        <label className='text-white font-medium mt-2 mb-2'>Cor do link</label>
                        <input type="color" value={textColorInput}
                            onChange={(e) => setTextColorInput(e.target.value)}
                        />
                    </div>

                    <div className='flex gap-2'>
                        <label className='text-white font-medium mt-2 mb-2'>Fundo do link</label>
                        <input type="color" value={backgroundColorInput}
                            onChange={(e) => setBackgroundColorInput(e.target.value)}
                        />
                    </div>
                </section>

                {nameInput !== '' && (
                    <div className='flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md'>
                        <label className='text-white font-medium mt-2 mb-3'>Veja como está ficando:</label>
                        <article className='w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3'
                            style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput }}
                        >
                            <p className='font-medium' style={{ color: textColorInput }}>{nameInput}</p>
                        </article>
                    </div>
                )}

                <button type='submit'
                    disabled={!nameInput || !urlInput}
                    className='mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center'>
                    Cadastrar
                </button>

            </form>

            <h2 className='font-bold text-white mb-4 text-2xl'>Meus Links</h2>
            {links.map((link) => (
                <article key={link.id} className='flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none'
                    style={{ backgroundColor: link.bg, color: link.color }}>
                    <p>{link.name}</p>
                    <div>
                        <button onClick={() => handleDeleteLink(link.id)} className='border border-dashed p-1 rounded bg-neutral-900'>
                            <FiTrash size={18} color='#fff' />
                        </button>
                    </div>
                </article>
            ))}
        </div>
    )
}