import { useState } from "react";

const MenuIsOn = ({menuOn , ebook ,youtubeImg ,codeBlockImg}) => {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
      const fileUrl = '/CppL.pdf';
      fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'archivo.pdf');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setDownloaded(true); // Update status to show message
          setTimeout(() => {
            setDownloaded(false); // Update status to hide message after 4 seconds
          }, 4000);
        })
        .catch(error => {
          console.error('Error downloading file:', error);
        });
    };
  
return (
    <nav className={`${menuOn} NavMenuIsOn NavMenuIsOn_position`}>
        <div className="DownloadsEbook">
        {downloaded && <h6 className="DownloadExited">¡ PDF downloaded <span className="spanSuccessfully">successfully</span>!</h6>}
        <div >
            <h3>Downloads</h3>
        </div>
        <div>
      <button onClick={handleDownload}> <img width={60} src={ebook} alt="Ebook downloaded" /></button>
       </div>
       <div>
        <a href="https://www.youtube.com/watch?v=YVlg0fC9Qgc&list=PLg9145ptuAigXfaTYcEdkmT6bmzZgEP9p&index=3" target="_blank" rel="noopener noreferrer"><img width={60} src={youtubeImg} alt="youtubeImg" /></a>
       </div>
       <div>
        <a href="http://www.codeblocks.org/downloads/binaries/" target="_blank" rel="noopener noreferrer"><img width={80} src={codeBlockImg} alt="codeBlockImg" /></a>
       </div>
        </div>
    </nav>
)
}

export default MenuIsOn