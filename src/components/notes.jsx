function NoteSelector({ selectedNote }) {

    const notes = ["C", "D", "E", "F", "G", "A", "B"];

    return (
        <div className="w-full max-w-xl mx-auto mt-6">

            <div className="flex justify-between items-center">

                {notes.map((note) => (

                    <div
                        key={note}
                        className="flex flex-col items-center"
                    >

                        <div
                            className={`w-4 h-4 rounded-full mb-2 transition-all duration-200 ${
                                note === selectedNote
                                    ? "bg-green-400 scale-125"
                                    : "bg-neutral-600"
                            }`}
                        />

                        <span
                            className={`text-lg font-medium ${
                                note === selectedNote
                                    ? "text-green-400"
                                    : "text-white"
                            }`}
                        >
                            {note}
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );

}

export default NoteSelector;