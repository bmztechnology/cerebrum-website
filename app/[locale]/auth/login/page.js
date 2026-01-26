import { signIn } from "@/auth";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
            <div className="w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight gradient-text">Cerebrum FX</h2>
                    <p className="mt-4 text-gray-400">Connectez-vous pour gérer votre abonnement</p>
                </div>

                <form
                    action={async (formData) => {
                        "use server";
                        await signIn("resend", formData);
                    }}
                    className="mt-8 space-y-6"
                >
                    <input
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white focus:border-orange-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-orange-500 py-4 font-bold text-black transition-all hover:bg-orange-600"
                    >
                        Recevoir un lien magique
                    </button>
                </form>

                <p className="text-sm text-gray-500">
                    Un email vous sera envoyé pour vous connecter sans mot de passe.
                </p>
            </div>
        </div>
    );
}
