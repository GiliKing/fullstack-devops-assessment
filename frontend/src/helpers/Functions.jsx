import { useEffect } from "react";
import Swal from "sweetalert2";
import nProgress from "nprogress";

export const RenderSuccessMessage = (message, time = 3500) =>
    Promise.resolve(
        Swal.fire({
            icon: "success",
            toast: true,
            position: "top-right",
            title: message,
            showConfirmButton: false,
            padding: "5px 10px",
            width: "auto",
            timer: time,
            timerProgressBar: true,
            iconHtml:
                '<div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="10" fill="#32936F" fill-opacity="0.24" /><path d="M14.473 6.80657C14.411 6.74409 14.3373 6.69449 14.256 6.66065C14.1748 6.6268 14.0876 6.60938 13.9996 6.60938C13.9116 6.60938 13.8245 6.6268 13.7433 6.66065C13.662 6.69449 13.5883 6.74409 13.5263 6.80657L8.55964 11.7799L6.47297 9.68657C6.40863 9.62441 6.33267 9.57554 6.24943 9.54274C6.16619 9.50993 6.07731 9.49385 5.98786 9.49539C5.8984 9.49694 5.81013 9.51609 5.72808 9.55176C5.64602 9.58742 5.5718 9.63889 5.50964 9.70324C5.44748 9.76759 5.39861 9.84355 5.3658 9.92679C5.333 10.01 5.31691 10.0989 5.31846 10.1884C5.32001 10.2778 5.33916 10.3661 5.37482 10.4481C5.41049 10.5302 5.46196 10.6044 5.52631 10.6666L8.08631 13.2266C8.14828 13.2891 8.22202 13.3387 8.30326 13.3725C8.3845 13.4063 8.47163 13.4238 8.55964 13.4238C8.64765 13.4238 8.73479 13.4063 8.81603 13.3725C8.89727 13.3387 8.971 13.2891 9.03297 13.2266L14.473 7.78657C14.5406 7.72415 14.5946 7.64838 14.6316 7.56404C14.6685 7.47971 14.6876 7.38864 14.6876 7.29657C14.6876 7.20451 14.6685 7.11344 14.6316 7.0291C14.5946 6.94477 14.5406 6.869 14.473 6.80657Z" fill="#32936F" /></svg ></div>',
            customClass: {
                popup: "custom-success-popup",
                title: "custom-popup-title",
                icon: "custom-popup-icon",
            },
        })
    );

export const RenderErrorMessage = (message, time = 3500) =>
    Promise.resolve(
        Swal.fire({
            icon: "error",
            toast: true,
            position: "top-right",
            title: message,
            showConfirmButton: false,
            timer: time,
            padding: "5px 10px",
            width: "auto",
            timerProgressBar: true,
            iconHtml:
                '<div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.723 21.1672C4.71 21.1672 4.698 21.1672 4.684 21.1662C4.369 21.1502 4.06 21.0822 3.766 20.9632C2.319 20.3752 1.621 18.7222 2.208 17.2762L9.529 4.45025C9.781 3.99425 10.163 3.61225 10.629 3.35425C11.994 2.59825 13.72 3.09525 14.475 4.45925L21.748 17.1872C21.91 17.5682 21.979 17.8782 21.996 18.1942C22.035 18.9502 21.777 19.6752 21.271 20.2362C20.765 20.7972 20.07 21.1282 19.315 21.1662L4.795 21.1672H4.723Z" fill="#862317" /><path fill-rule="evenodd" clip-rule="evenodd" d="M11.125 10.0208C11.125 9.53875 11.518 9.14575 12 9.14575C12.482 9.14575 12.875 9.53875 12.875 10.0208V12.8488C12.875 13.3318 12.482 13.7238 12 13.7238C11.518 13.7238 11.125 13.3318 11.125 12.8488V10.0208ZM11.125 16.2699C11.125 15.7849 11.518 15.3899 12 15.3899C12.482 15.3899 12.875 15.7799 12.875 16.2589C12.875 16.7519 12.482 17.1449 12 17.1449C11.518 17.1449 11.125 16.7519 11.125 16.2699Z" fill="white" /></svg></div>',
            customClass: {
                popup: "custom-error-popup",
                title: "custom-popup-title",
                icon: "custom-popup-icon",
            },
        })
    );

export const RenderConfirmDialogue = (
    title = "Are you sure?",
    text = "Do you want to perform this action?",
    confirmFn,
    denyFn
) =>
    Swal.fire({
        title: title,
        text: text,
        cancelButtonColor: "red",
        confirmButtonText: "Yes, Confirm",
        showCancelButton: true,
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            confirmFn?.();
        } else if (result.isDenied) {
            denyFn?.();
        }
    });


export const Loader = ({ white }) => {
    return (
        <div className="flex justify-center" style={{ width: "100%" }}>
            <span className={`btn-loader ${white ? "white" : ""}`}></span>
        </div>
    );
};

export const ProgressBar = () => {
    useEffect(() => {
        nProgress.start();
        return () => {
            nProgress.done();
        };
    });
    return "";
};

