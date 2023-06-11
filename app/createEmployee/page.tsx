import FormWrapper from '@/components/Form/FormWrapper'

function Page() {
    return (
        <section className={"mx-auto px-4 max-w-7xl flex flex-col items-center"}>
            <h2 className="text-3xl font-medium text-center mb-4">Create Employee</h2>
            <FormWrapper />
        </section>
    )
}

export default Page