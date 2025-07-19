# Get name of C standard library depending on the platform
libc_name = Sys.iswindows() ? "msvcrt.dll" :
            Sys.isapple()   ? "libc.dylib" :
                              "libc.so.6"

@model function call_C(y = 0.0)
    x ~ Normal(0, 1)

    # Call C library abs function
    x_abs = @ccall libc_name.fabs(x::Cdouble)::Cdouble

    y ~ Normal(0, x_abs)
end

model = call_C()