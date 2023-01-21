import clsx from 'clsx';
import usePopup from './hooks/usePopup';

const Popup = () => {
  const {popup} = usePopup();

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 flex w-screen h-screen bg-opacity-10 transition-[background-color]',
        popup ? 'bg-black' : 'bg-transparent pointer-events-none'
      )}
    >
      {!!popup && (
        <div className="p-4 m-auto bg-white rounded shadow min-w-[25vw] pointer-events-auto">
          {popup.content}
          <div className="flex justify-start mt-8">
            {popup.buttons}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
