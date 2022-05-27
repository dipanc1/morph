import React from 'react'
import styles from '../styles/Contact.module.css'


const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [desc, setDesc] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, phone, desc)

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        desc: desc
      })
    })
      .then(response => {
        if (response.ok) {
          console.log('Success!')
          setDesc('')
          setEmail('')
          setName('')
          setPhone('')
          alert('Message sent!')
        } else {
          console.log('Error!')
        }
      }
      )

  }

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value)
    } else if (e.target.name === 'desc') {
      setDesc(e.target.value)
    }
  }


  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter Your Name</label>
          <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name='name' aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name='email' aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Enter Your Phone Number</label>
          <input type="phone" value={phone} onChange={handleChange} className="form-control" id="phone" name='phone' aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate Your Concern</label>
          <textarea className="form-control" value={desc} placeholder="Write your concern here" onChange={handleChange} id="desc" name='desc' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact