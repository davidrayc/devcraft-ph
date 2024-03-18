import { useEffect, useState } from 'react';

// FormField component
const FormField = ({ id, label, type, onChange, value }) => (
  <div className="mb-4 flex justify-between">
    <label htmlFor={id} className="py-2 pr-4">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      className="border-2 border-gray-300 p-2"
      onChange={onChange}
    />
  </div>
);

// UserModal component
const userModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showError, setShowError] = useState(false);

  // Check if password and confirm password match
  useEffect(() => {
    setIsPasswordValid(password === confirmPassword);
  }, [password, confirmPassword]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      if (!isPasswordValid) {
        setShowError(true);
      } else {
        setShowError(false);
      }
    }
  };

  // Clear form fields
  const handleCancel = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setConfirmPassword('');
  };

  // Toggle modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Show Modal</button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="rounded border-2 border-gray-300 p-6 shadow-lg">
            <form onSubmit={handleSubmit}>
              <FormField
                id="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormField
                id="first_name"
                label="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormField
                id="last_name"
                label="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <FormField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormField
                id="confirm-password"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {!isPasswordValid && showError && (
                <p className="text-red-500">Passwords do not match</p>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mr-10 w-40 self-center rounded-md bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleCancel();
                    toggleModal();
                  }}
                  className="ml-10 w-40 self-center rounded-md bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
              {isEmpty && (
                <p className="text-red-500">All fields are required</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default userModal;
