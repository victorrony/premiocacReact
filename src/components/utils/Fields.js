const cN = "w-96 h-12 rounded-full p-2";
export const Input = ({ set, lable }) => (
  <div className="form-group mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {lable}
    </label>
    <input
      type="text"
      className={cN}
      required
      onChange={(e) => set(e.target.value)}
    />
  </div>
);

export const EmailAndPasswordFeild = ({ set }) => (
  <div className="grid gap-4">
    <Input
      lable={"Email"}
      set={(val) => {
        set((c) => {
          c.email = val;
          return c;
        });
      }}
      placeholder="anything@example.com"
    />
    <div className="form-group mb-6">
      
      <Input
        lable={"Senha"}
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
