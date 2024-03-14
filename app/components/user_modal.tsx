const UserModal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <label htmlFor="Email">Email Address</label>
        <input type="text" id="Email" />
        <label htmlFor="First-Name">First Name</label>
        <input type="text" id="First-Name" />
        <label htmlFor="Last-Name">Last Name</label>
        <input type="text" id="Last-Name" />
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" />
        <label htmlFor="Confirm-Password">Confirm Password</label>
        <input type="password" id="Confirm-Password" />
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default UserModal;
