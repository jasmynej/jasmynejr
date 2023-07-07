import Layout from "../components/Layout";

function Contact(){
    return (
        <Layout activePage={"contact"}>
            <div className="flex flex-col items-center">
                <h1 className="text-5xl border-b-4">Contact</h1>
                <p className="text-3xl font-extralight">Email: jasmyne@jasmynejr.com</p>
            </div>

        </Layout>
    )
}

export default Contact;