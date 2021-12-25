import React,{FC, FormEvent} from 'react';

interface Props {
  
}

 const Navbar: FC<Props> = (props)=> {
     const handleSubmit = (e:FormEvent): void =>{
         e.preventDefault()
     }
  return (
    <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex align-items-center justify-content-between">
    <a className="navbar-brand">Custom shop name</a>
  
    <div className='w-50'>
      
      <form className="d-flex" onSubmit={handleSubmit}>
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit" >Search</button>
        <div className='h3 '>
        <i className="bi bi-funnel bg-dark text-white"></i>
        </div>
     
      </form>
   
  </div>
     <div className='h3'>
        <i className="bi bi-bookmark bg-dark text-white mx-2 mb-0"></i>
        <i className="bi bi-cart bg-dark text-white mb-0"></i>
        </div>
    
   
    </div>
    </nav>
  )
};
export default Navbar