import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";

export default function SearchInput({ label, ...delegated }) {
  return (
    <label>
      <VisuallyHidden>Search</VisuallyHidden>
      <input
        {...delegated}
        placeholder="Search"
      />
    </label>
  );
}
