function WorkerCard({name , work , rating , distance}){
    return (
        <div>
            <h3>{name}</h3>
            <p>{work}</p>
            <p> ⭐ {rating}</p>
            <p> 📍{distance}</p>
        </div>
    );
}

export default WorkerCard;