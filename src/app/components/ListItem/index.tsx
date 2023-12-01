import "./styles.css";

export type ItemType = {
  _id: string;
  title: string;
  body: string;
};

export type ListItemProps = {
  item: ItemType;
  isAdmin?: boolean;
  deleteFun?: (id: string) => void;
};

const ListItem: React.FC<ListItemProps> = ({ item, isAdmin, deleteFun }) => {
  return (
    <div key={item._id} className="listItem" data-aos="flip-up">
      <h6 className="listItemTitle">{item.title}</h6>
      <p>{item.body}</p>
      {isAdmin && (
        <button className="deleteButton" onClick={() => deleteFun?.(item._id)}>
          delete
        </button>
      )}
    </div>
  );
};

export default ListItem;
