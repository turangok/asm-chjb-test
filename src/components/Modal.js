import { useEffect } from 'react';

export default function Modal({ children, isOpen, modalToggle }) {
    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                modalToggle();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [modalToggle]);

    return (
        <div
            className={`modal fade ${isOpen}`}
            id="exampleModal"
            tab-index="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
            </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={modalToggle}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );
}
