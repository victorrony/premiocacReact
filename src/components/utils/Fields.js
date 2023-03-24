const cN = "w-96 h-12 rounded-full p-2 px-6";


export const Input = ({ set, label, twClass, type }) => (
  <div className="form-group mb-6">
    <label className="block mb-2 text-sm font-bold text-white ">{label}</label>
    <input
      type={type}
      className={cN + " " + twClass}
      required
      onChange={(e) => set(e.target.value)}
    />
  </div>
);

export const EmailAndPasswordFeild = ({ set }) => (
  <div className="grid">
    <Input
      type="email"
      label={"Email"}
      set={(val) => {
        set((c) => {
          c.email = val;
          return c;
        });
      }}
      placeholder="anything@example.com"
    />
    <div className="form-group mb-2">
      <Input
        type="password"
        label={"Senha"}
        set={(val) => {
          set((c) => {
            c.password = val;
            return c;
          });
        }}
      />
    </div>
  </div>
);
