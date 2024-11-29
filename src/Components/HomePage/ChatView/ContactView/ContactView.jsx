import './ContactView.css';
import ContactViewDiv from './ContentDiv';

const ContactView = () => {

    const arr = [0, 1, 45, 6, 7, 86, 6, 7, 4, 8];
    const divElement = arr.map((number, index) => (
        <ContactViewDiv key={index} />
    ));

    return (

        <div className='contactView'>
            <span className="titleOfApp">ChatBuZZ</span>
            <input className="contactSerach" type="text"/>
            <div className="contactListContainer">
                {divElement}
            </div>
        </div>


    );
}

export default ContactView;