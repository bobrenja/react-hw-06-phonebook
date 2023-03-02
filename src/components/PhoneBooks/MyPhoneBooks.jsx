import MyForm from './Form/MyForm';
import Contacts from './Contacts/Contacts';
import Search from './Search/Search';
import { useSelector } from 'react-redux';

const MyPhoneBooksForm = () => {
  const contacts = useSelector(state => state.phoneBooks.contacts);
  // const [contacts, setContacts] = useState(() => {
  //   const contacts = JSON.parse(localStorage.getItem('contactPhone'));
  //   return contacts ? contacts : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem('contactPhone', JSON.stringify(contacts));
  // }, [contacts]);

  const isContact = Boolean(contacts.length);

  return (
    <>
      <h1>Phonebook</h1>
      <MyForm />
      <Search />
      {isContact && <Contacts />}
    </>
  );
};

export default MyPhoneBooksForm;
