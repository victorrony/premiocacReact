export const Input = ({}) => <input type="text" className="section_input" required/>;

export const EmailAndPasswordFeild = ({set}) => <div className="grid gap-4">
      <div className="form-group mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input required type="email"  id="cardnumber"
          onChange={(e) => {
            set((c)=>{
              c.email = e.target.value;
              return c;
            });
          }}
          placeholder="anything@example.com" />
      </div>
      <div className="form-group mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Senha</label>
        <input required type="password"  id="adressName"
        onChange={(e) => {
          set((c)=>{
            c.password = e.target.value;
            return c;
          });
        }}
          placeholder="***" />
      </div>
    </div>;