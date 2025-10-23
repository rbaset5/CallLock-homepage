import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { ReactNode } from 'react'

export function Features() {
    return (
        <div className="bg-white py-8 md:py-16">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-4 *:text-center md:mt-16">
                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <span className="text-2xl font-bold">1</span>
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">20-min call</h3>
                            <div className="text-3xl mt-2">📞</div>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">We gather your details</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <span className="text-2xl font-bold">2</span>
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">48 hours</h3>
                            <div className="text-3xl mt-2">🕐</div>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">We build your system</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <span className="text-2xl font-bold">3</span>
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Forward your line</h3>
                            <div className="text-3xl mt-2">📅💰</div>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">You're live</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:black] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"/>
        <div className="bg-action text-white absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l rounded-full">{children}</div>
    </div>
)
