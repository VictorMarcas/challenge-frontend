import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  [
    'inline-flex',
    'items-center',
    'gap-2',
    'transition-all',
    'duration-200',
    'font-semibold',
  ],
  {
    variants: {
      intent: {
        primary: 'bg-primary-500 hover:bg-primary-400 text-white',
        secondary:
          'border-primary-500 border hover:bg-primary-100 text-primary-500',
        minimal: 'hover:bg-gray-100 text-gray-900',
      },
      fullWidth: {
        true: 'w-full',
      },
      alignment: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      },
      disabled: {
        true: 'disabled:bg-gray-100 disabled:opacity-50 disabled:cursor-default',
      },
      size: {
        sm: 'px-2 py-1 text-sm rounded [&>span]:h-4',
        md: 'px-4 py-2 text-sm rounded-md [&>span]:h-6',
        lg: 'px-6 py-3 text-base rounded-lg [&>span]:h-8',
      },
      iconPosition: {
        left: 'flex-row',
        right: 'flex-row-reverse',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      iconPosition: 'left',
      align: 'center',
    },
  }
)
