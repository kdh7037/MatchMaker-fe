import useToast from './hooks/useToast';

const Toast = () => {
  const {toastList, hideToast} = useToast();

  return (
    <div className="fixed bottom-0 right-0 flex flex-col-reverse items-end pointer-events-none">
      {toastList.map(toast => (
        <div
          key={toast.id}
          className="px-4 py-3 mb-4 mr-4 transition-all bg-white border-l-8 border-blue-400 rounded shadow-lg cursor-pointer pointer-events-auto shadow-gray-300 animate-showToast"
          onClick={() => hideToast(toast.id)}
        >
          {toast.content}
        </div>
      ))}
    </div>
  );
};

export default Toast;
