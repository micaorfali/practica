export default function Page({ params }) {
    console.log(params.id)
    return <>
            <div>My Post: {params.id}</div>
            <div>My Post: {params.title}</div>

        </>
  }

