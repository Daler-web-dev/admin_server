import Image from "next/image";

export default function Login() {
	return (
		<div className="w-full h-screen flex justify-center items-center bg-[#F3F6FE]" >
            <div className="w-[400px]" >
				<h1 className="font-normal mb-3 text-2xl">Вход в аккаунт</h1>
				<form className="flex flex-col"  >
					<label htmlFor="login" className="text-[9px] uppercase mb-2"  >ЛОГИН</label>
					<input className="p-3 rounded-md" type="text" placeholder="Логин" name="login" />
					<br />
					<label htmlFor="password" className="text-[9px] uppercase mb-2" >ПАРОЛЬ</label>
					<input className="p-3 rounded-md" type="text" placeholder="Пароль" name="password" />
					<br />
					<button className="bg-[#007aff] text-white p-3 rounded-md" >Войти</button>
				</form>
            </div>
		</div>
	);
}
