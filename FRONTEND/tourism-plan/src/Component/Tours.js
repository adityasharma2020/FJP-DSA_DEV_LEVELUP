function Tours(Tours) {
  return (
    <div>
      <div>
        {Tours.map((tour) => {
          return <Card tour={tour}></Card>
        })}
      </div>
    </div>
  )
}

export default Tours
