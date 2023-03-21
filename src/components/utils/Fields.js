const cN = "w-96 h-12 rounded-full p-2";
export const Input = ({ set }) => (
  <input
    type="text"
    className={cN}
    required
    onChange={(e) => set(e.target.value)}
  />
);

export const EmailAndPasswordFeild = ({ set }) => (
  <div className="grid gap-4">
    <div className="form-group mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Email
      </label>
      <Input
        set={(val) => {
          set((c) => {
            c.email = val;
            return c;
          });
        }}
        placeholder="anything@example.com"
      />
    </div>
    <div className="form-group mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Senha
      </label>
      <Input
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
