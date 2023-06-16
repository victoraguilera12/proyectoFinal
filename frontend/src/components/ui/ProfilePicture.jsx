export default function ({src}){
    return src ? (
        <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ) : (
        <div className="h-8 w-8 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center">
            <em className="text-lg iconoir-user"></em>
        </div>
    );
}