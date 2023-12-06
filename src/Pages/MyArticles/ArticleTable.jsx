

const ArticleTable = ({manageArticle,handleDelete}) => {

    const { _id,title, image, tag, publisher, type, authorName, authorEmail, authorPhoto } = manageArticle;
    console.log(manageArticle)


    return (
        <tr>
            <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
            </th>
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component"/>
                </div>
                </div>
                <div>
                    <div className="font-bold">{title}</div>
                    <div className="text-sm opacity-50">{authorEmail}</div>
                </div>
            </div>
            </td>
            <td>
            
            <br />
            <span className="badge badge-ghost badge-sm">
                {publisher}
            </span>
            </td>
            <td>{type}</td>
            <th>
            {/* <button className="btn btn-ghost btn-xs">details</button> */}
            <div className="flex justify-between gap-5">
                <button onClick={() => handleDelete(_id)} className="btn btn-sm avatar">
                <img
                    className="w-10 h-10 rounded"
                    src="https://i.ibb.co/8NhjyJ1/delete.png"
                />
                </button>
            </div>
        </th>
      </tr>
    );
};

export default ArticleTable;