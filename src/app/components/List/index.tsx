import ListItem, { ItemType } from "../ListItem";
import "./styles.css";

export type ListProps = {
  items?: ItemType[];
  isAdmin?: boolean;
  deleteFun?: (id: string) => void;
};

const List: React.FC<ListProps> = ({ items, isAdmin, deleteFun }) => {
  return items ? (
    <div className="list">
      {items?.map((vacancy, index) => (
        <ListItem
          item={vacancy}
          key={index}
          isAdmin={isAdmin}
          deleteFun={deleteFun}
        />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default List;
