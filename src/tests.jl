function ldag(model, adtype, rng=Xoshiro(468))
    ldf = DynamicPPL.LogDensityFunction(model, DynamicPPL.VarInfo(rng, model))
    ℓ = ADgradient(adtype, ldf)
    logdensity_and_gradient(ℓ, DynamicPPL.getparams(ldf))
end
