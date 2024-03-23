export default function CustomInput({ onChange, placeholder }) {
    return (
        <input
            className="w-40 h-10 border pl-2 border-black mx-2"
            type="text"
            onChange={onChange}
            placeholder={placeholder}
            required
        />
    );
}