import usePopup from './hooks/usePopup';

const Popup = () => {
  const {popup} = usePopup();

  return popup ? (
    <div className="fixed top-0 left-0 flex w-screen h-screen">
      <div className="p-4 m-auto">
        {popup.content}
      </div>
    </div>
  ) : null;
};

export default Popup;
