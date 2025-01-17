

function Card({ links, names, discs }) {

  return (
    <div className="">
      <div className="w-60 border border-gray-500 ">
        <div>
          <img src={links} alt="" />
        </div>
        <div className="p-4">
          <h1 className="font-bold text-2xl mb-4">{names}</h1>
          <p>{discs}</p>
          <a href="" className="bg-purple-500 text-white p-2 inline-block mt-4">Click me</a>
        </div>
      </div>

    </div>
  )
}

export default Card
