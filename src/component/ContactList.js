import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";
const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword != "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div>
      <SearchBox />
      <div style={{ marginBottom: "20px" }}>총 {contactList.length}명</div>
      <div className="contat-list">
        {filteredList.map((item, index) => (
          <ContactItem className="contact-person" item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
