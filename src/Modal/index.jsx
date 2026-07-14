import { useEffect } from 'react';
import './Modal.css';

const Modal = ({
	isOpen,
	title = 'Confirmar accion',
	description,
	children,
	confirmText = 'Confirmar',
	cancelText = 'Cancelar',
	onConfirm,
	onClose,
	showActions = true,
}) => {
	useEffect(() => {
		if (!isOpen) return;

		const onKeyDown = (event) => {
			if (event.key === 'Escape') {
				onClose?.();
			}
		};

		document.addEventListener('keydown', onKeyDown);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.body.style.overflow = '';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="modal" role="presentation">
			<button
				type="button"
				className="modal__overlay"
				aria-label="Cerrar modal"
				onClick={onClose}
			/>

			<section
				className="modal__card"
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
				aria-describedby={description ? 'modal-description' : undefined}
			>
				<header className="modal__header">
					<h3 id="modal-title">{title}</h3>
					<button
						type="button"
						className="modal__close"
						onClick={onClose}
						aria-label="Cerrar"
					>
						x
					</button>
				</header>

				<div className="modal__content">
					{description && <p id="modal-description">{description}</p>}
					{children}
				</div>

				{showActions && (
					<footer className="modal__actions">
						<button type="button" className="btn btn--ghost" onClick={onClose}>
							{cancelText}
						</button>
						<button type="button" className="btn btn--solid" onClick={onConfirm}>
							{confirmText}
						</button>
					</footer>
				)}
			</section>
		</div>
	);
};

export default Modal;