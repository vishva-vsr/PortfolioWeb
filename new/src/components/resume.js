import Resume1 from '../assets/pngwing.com.png';
export default function Resume(){
    const config = {
        link:'https://docs.google.com/document/d/1MpSO4PQ7aC0L6n0a54rUnG9zgTvYKuie4kBeU5rG_v8/edit'
    }
    return <section id='resume' className='flex flex-col md:flex-row py-5 px-5 bg-primary justify-center'>
        <div className=' md:w-1/2 '>
           <img className='w-[400px]' src={Resume1}/>
        </div>
        <div className='md:w-1/2 flex flex-col items-center py-7 md:py-24'>
            <h1 className='text-3xl pb-3 '>Resume</h1>
            <h2 className='text-2xl px-3 py-3 '>
            Click To  <a className='btn hover:bg-purple-500 justify-center' href={config.link}>Downlode</a> 
            </h2>
        </div>
        
    </section>
}