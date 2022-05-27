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

    if (name.length === 0 || email.length === 0 || phone.length === 0 || desc.length === 0) {
      alert('Please enter something!')
      return
    } else {
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
          <input type="text" value={name} onChange={handleChange} className={styles.input} id="name" name='name' aria-describedby="emailHelp" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input type="email" value={email} onChange={handleChange} className={styles.input} id="email" name='email' aria-describedby="emailHelp" required />
          <div id="emailHelp" className={styles.formText}>We will never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Enter Your Phone Number</label>
          <input type="phone" value={phone} onChange={handleChange} className={styles.input} id="phone" name='phone' aria-describedby="emailHelp" required />
        </div>
        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="desc">Elaborate Your Concern</label>
          <textarea className={styles.input} value={desc} placeholder="Write your concern here" onChange={handleChange} id="desc" name='desc' required />
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact